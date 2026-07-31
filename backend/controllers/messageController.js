import Message from "../models/Message.js";

// Create Message (Public)
export const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Messages (Admin)
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Mark Message as Read
export const markAsRead = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true,
      },
      {
        new: true,
      }
    );

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Message
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    await message.deleteOne();

    res.json({
      message: "Message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};