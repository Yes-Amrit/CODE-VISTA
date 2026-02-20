const JUDGE0_API =
  "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
  c: 50,
  php: 68,
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return { success: false, error: "Unsupported language" };
    }

    const response = await fetch(JUDGE0_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: code,
        language_id: languageId,
        stdin: "",
      }),
    });

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` };
    }

    const data = await response.json();

    if (data.stderr) {
      return {
        success: false,
        error: data.stderr,
      };
    }

    return {
      success: true,
      output: data.stdout || data.compile_output || "No Output",
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}
