import { useEffect, useState } from "react";
import {
  getMessages,
  markMessageAsRead,
  deleteMessage,
} from "../../services/messageService";

export default function ManageMessages() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleRead = async (id) => {
    try {
      await markMessageAsRead(id);
      loadMessages();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMessage(id);
      loadMessages();
    } catch (error) {
      console.error(error);
    }
  };

  if (messages.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-800 p-6 text-center text-slate-400">
        No messages found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((msg) => (
        <div
          key={msg._id}
          className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-orange-400">
              {msg.name}
            </h2>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                msg.isRead
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {msg.isRead ? "Read" : "Unread"}
            </span>
          </div>

          <p className="mt-3 text-slate-400">
            <strong>Email:</strong> {msg.email}
          </p>

          <p className="mt-2 text-slate-400">
            <strong>Subject:</strong> {msg.subject}
          </p>

          <p className="mt-4 whitespace-pre-wrap text-slate-300">
            {msg.message}
          </p>

          <p className="mt-4 text-sm text-slate-500">
            {new Date(msg.createdAt).toLocaleString()}
          </p>

          <div className="mt-6 flex gap-3">
            {!msg.isRead && (
              <button
                onClick={() => handleRead(msg._id)}
                className="rounded-xl bg-green-500 px-4 py-2 font-medium text-black hover:bg-green-400"
              >
                Mark Read
              </button>
            )}

            <button
              onClick={() => handleDelete(msg._id)}
              className="rounded-xl bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}