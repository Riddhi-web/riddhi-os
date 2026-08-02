import { useCertificate } from "../../context/certificateContext";

const ManageCertificates = () => {
  const {
    certificates,
    deleteCertificateData,
    setEditingCertificate,
  } = useCertificate();

  if (certificates.length === 0) {
    return (
      <div className="bg-gray-900 rounded-xl p-6 text-center text-gray-400">
        No certificates added yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {certificates.map((certificate) => (
        <div
          key={certificate._id}
          className="bg-gray-900 p-5 rounded-xl border border-gray-800"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                {certificate.title}
              </h3>

              <p className="text-orange-400">
                {certificate.issuer}
              </p>

              <p className="text-gray-400">
                {certificate.issueDate
                  ? new Date(certificate.issueDate).toLocaleDateString()
                  : ""}
              </p>

              {certificate.credentialId && (
                <p className="text-gray-400">
                  Credential ID: {certificate.credentialId}
                </p>
              )}

              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline block"
                >
                  View Certificate
                </a>
              )}

              {certificate.description && (
                <p className="text-gray-300">
                  {certificate.description}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setEditingCertificate(certificate)
                }
                className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteCertificateData(certificate._id)
                }
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
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

export default ManageCertificates;