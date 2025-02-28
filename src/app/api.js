// pages/api/pabbly.js

const handleCRMSubmit = async () => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  console.log("req.body", req.body);
  try {
    const response = await fetch("YOUR_PABBLY_WEBHOOK_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    console.log("response", response);
    const result = await response.json();
    console.log('result', result)
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send data" });
  }
};

export default handleCRMSubmit;
