import { useEducation } from "../../context/EducationContext";

const ManageEducations = () => {
  const {
    educations,
    deleteEducationData,
    setEditingEducation,
  } = useEducation();

  if (educations.length === 0) {
    return (
      <div className="bg-gray-900 rounded-xl p-6 text-center text-gray-400">
        No education records found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {educations.map((education) => (
        <div
          key={education._id}
          className="bg-gray-900 rounded-xl p-5 border border-gray-800"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">
                {education.degree}
              </h3>

              <p className="text-orange-400 font-medium">
                {education.institute}
              </p>

              {education.location && (
                <p className="text-gray-400">
                  📍 {education.location}
                </p>
              )}

              <p className="text-gray-500 text-sm mt-1">
                {education.startDate?.substring(0, 10)}{" "}
                -
                {" "}
                {education.currentlyStudying
                  ? "Present"
                  : education.endDate?.substring(0, 10)}
              </p>

              {education.grade && (
                <p className="text-green-400 mt-2">
                  Grade: {education.grade}
                </p>
              )}

              {education.description && (
                <p className="text-gray-300 mt-2">
                  {education.description}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setEditingEducation(education)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEducationData(education._id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageEducations;