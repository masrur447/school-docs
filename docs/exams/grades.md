### You need to customize grad points in manuallye

```bash
namespace App\Services;

use App\Models\Mark;
use App\Models\Marks;
use App\Models\Subject;

class GpaCalculator
{
    /**
     * Calculate GPA based on marks
     *
     * @param int $assignStudentId
     * @param int $examId
     * @return float
     */
    public static function calculate(int $assignStudentId, int $examId): float
    {
        $marks = Marks::where('assign_student_id', $assignStudentId)
            ->where('exam_id', $examId)
            ->with('subject')
            ->get();

        if ($marks->isEmpty()) {
            return 0.00;
        }

        $totalPoints = 0;
        $totalSubjects = 0;

        foreach ($marks as $mark) {
            $point = self::getGradePoint($mark->marks);

            if ($point === 0.00) {
                // Fail in any subject = GPA 0.00
                return 0.00;
            }

            $totalPoints += $point;
            $totalSubjects++;
        }

        return round($totalPoints / $totalSubjects, 2);
    }

    // Custom grading logic based on marks
    public static function getGradePoint(int $mark): float
    {
        return match (true) {
            $mark >= 80 => 5.00,
            $mark >= 70 => 4.00,
            $mark >= 60 => 3.50,
            $mark >= 50 => 3.00,
            $mark >= 40 => 2.00,
            $mark >= 33 => 1.00,
            default => 0.00,
        };
    }

    // Custom grading logic based on marks
    public static function getGradeName(int $mark): string
    {
        return match (true) {
            $mark >= 80 => 'A+',
            $mark >= 70 => 'A',
            $mark >= 60 => 'A-',
            $mark >= 50 => 'B',
            $mark >= 40 => 'C',
            $mark >= 33 => 'D',
            default => 'F',
        };
    }

    public static function getGradeColor(int $mark): string
    {
        return match (true) {
            $mark >= 80 => 'green-500',
            $mark >= 70 => 'green-400',
            $mark >= 60 => 'blue-500',
            $mark >= 50 => 'yellow-500',
            $mark >= 40 => 'orange-500',
            $mark >= 33 => 'red-400',
            default => 'red-500',
        };
    }

    public static function getGradeNameByGpa(float $gpa): string
    {
        return match (true) {
            $gpa >= 4.00 => 'A+',
            $gpa >= 3.50 => 'A',
            $gpa >= 3.00 => 'A-',
            $gpa >= 2.00 => 'B',
            $gpa >= 1.00 => 'C',
            $gpa >= 0.00 => 'F',
            default => 'F',
        };
    }

    // Calculate percentage
    public static function getPercentage(int $mark, int $fullMark): float
    {
        return round(($mark / $fullMark) * 100, 2) ?? 0.00;
    }
}

```
