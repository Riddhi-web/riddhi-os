import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEducation } from "../../context/EducationContext";

const AddEducationForm = () => {
  const {
    addEducation,
    updateEducationData,
    editingEducation,
    setEditingEducation,
  } = useEducation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      degree: "",
      institute: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      grade: "",
      description: "",
    },
  });

  // Temporary debug (remove after CRUD works)
  console.log("Education Form:", watch());

  useEffect(() => {
    if (editingEducation) {
      reset({
        degree: editingEducation.degree || "",
        institute: editingEducation.institute || "",
        location: editingEducation.location || "",
        startDate: editingEducation.startDate
          ? editingEducation.startDate.substring(0, 10)
          : "",
        endDate: editingEducation.endDate
          ? editingEducation.endDate.substring(0, 10)
          : "",
        currentlyStudying:
          editingEducation.currentlyStudying || false,
        grade: editingEducation.grade || "",
        description: editingEducation.description || "",
      });
    } else {
      reset({
        degree: "",
        institute: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        grade: "",
        description: "",
      });
    }
  }, [editingEducation, reset]);

  const onSubmit = async (data) => {
    console.log("Submit Data:", data);

    const payload = {
      ...data,
    };

    try {
      if (editingEducation) {
        await updateEducationData(editingEducation._id, payload);
      } else {
        await addEducation(payload);
      }

      reset({
        degree: "",
        institute: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        grade: "",
        description: "",
      });

      setEditingEducation(null);
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-gray-900 p-6 rounded-xl"
    >
      <input
        type="text"
        placeholder="Degree"
        {...register("degree", { required: true })}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="text"
        placeholder="Institute"
        {...register("institute", { required: true })}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="text"
        placeholder="Location"
        {...register("location")}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          {...register("startDate", { required: true })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />

        <input
          type="date"
          {...register("endDate")}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("currentlyStudying")}
        />
        Currently Studying
      </label>

      <input
        type="text"
        placeholder="Grade / Percentage / CGPA"
        {...register("grade")}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <textarea
        rows="4"
        placeholder="Description"
        {...register("description")}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded font-semibold transition"
      >
        {editingEducation ? "Update Education" : "Add Education"}
      </button>
    </form>
  );
};

export default AddEducationForm;