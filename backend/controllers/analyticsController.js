import Analytics from "../models/Analytics.js";
import Message from "../models/Message.js";

const getAnalyticsDoc = async () => {
  let analytics = await Analytics.findOne();

  if (!analytics) {
    analytics = await Analytics.create({});
  }

  return analytics;
};

// Dashboard Analytics
export const getAnalytics = async (req, res) => {
  try {
    const analytics = await getAnalyticsDoc();

    const totalMessages = await Message.countDocuments();

    const unreadMessages = await Message.countDocuments({
      isRead: false,
    });

    res.json({
      totalVisitors: analytics.totalVisitors,
      resumeDownloads: analytics.resumeDownloads,
      totalMessages,
      unreadMessages,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Track Portfolio Visit
export const trackVisit = async (req, res) => {
  try {
    const analytics = await getAnalyticsDoc();

    analytics.totalVisitors++;

    await analytics.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Resume Download
export const trackResumeDownload = async (req, res) => {
  try {
    const analytics = await getAnalyticsDoc();

    analytics.resumeDownloads++;

    await analytics.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};