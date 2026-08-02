import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCertificate } from "../../context/certificateContext";

const AddCertificateForm = () => {
  const {
    addCertificate,
    updateCertificateData,
    editingCertificate,
    setEditingCertificate,
  } = useCertificate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      issuer: "",
      issueDate: "",
      credentialId: "",
      credentialUrl: "",
      description: "",
    },
  });

  // Temporary Debug (Remove after CRUD testing)
  console.log("Certificate Form:", watch());

  useEffect(() => {
    if (editingCertificate) {
      reset({
        title: editingCertificate.title || "",
        issuer: editingCertificate.issuer || "",
        issueDate: editingCertificate.issueDate
          ? editingCertificate.issueDate.substring(0, 10)
          : "",
        credentialId: editingCertificate.credentialId || "",
        credentialUrl: editingCertificate.credentialUrl || "",
        description: editingCertificate.description || "",
      });
    } else {
      reset({
        title: "",
        issuer: "",
        issueDate: "",
        credentialId: "",
        credentialUrl: "",
        description: "",
      });
    }
  }, [editingCertificate, reset]);

  const onSubmit = async (data) => {
    console.log("Submit Data:", data);

    const payload = {
      ...data,
    };

    console.log("Payload:", payload);

    try {
      if (editingCertificate) {
        await updateCertificateData(editingCertificate._id, payload);
      } else {
        await addCertificate(payload);
      }

      reset({
        title: "",
        issuer: "",
        issueDate: "",
        credentialId: "",
        credentialUrl: "",
        description: "",
      });

      setEditingCertificate(null);
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
        placeholder="Certificate Title"
        {...register("title", { required: true })}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="text"
        placeholder="Issuer"
        {...register("issuer", { required: true })}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="date"
        {...register("issueDate", { required: true })}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="text"
        placeholder="Credential ID"
        {...register("credentialId")}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="url"
        placeholder="Credential URL"
        {...register("credentialUrl")}
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
        {editingCertificate ? "Update Certificate" : "Add Certificate"}
      </button>
    </form>
  );
};

export default AddCertificateForm;