import ExerciseList from "./ExerciseList";
import WorkoutForm from "./WorkoutForm";
const WorkoutDetails = (formData: any) => {

    console.log('DATA', formData)
    return (
        <div>
            {formData.bodyPart}
        </div>
    )
}

export default WorkoutDetails;