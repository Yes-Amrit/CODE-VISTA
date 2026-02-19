import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { useCall } from "@stream-io/video-react-sdk";
import { useEffect, useRef } from "react";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  const call = useCall();
  const skipBroadcastRef = useRef(false);

  /* 🔥 LISTEN FOR LIVE CODE EVENTS */
  useEffect(() => {
    if (!call) return;

    const handleEvent = (event) => {
      if (event.type === "custom.code-update") {
        skipBroadcastRef.current = true;
        onCodeChange(event.custom.code);
      }

      if (event.type === "custom.language-update") {
        skipBroadcastRef.current = true;
        onLanguageChange({
          target: { value: event.custom.language },
        });
      }
    };

    call.on("custom", handleEvent);

    return () => {
      call.off("custom", handleEvent);
    };
  }, [call]);

  /* 🔥 BROADCAST CODE CHANGES */
  const handleCodeChange = (value) => {
    onCodeChange(value);

    if (!call || skipBroadcastRef.current) {
      skipBroadcastRef.current = false;
      return;
    }

    call.sendCustomEvent({
      type: "code-update",
      code: value,
    });
  };

  /* 🔥 BROADCAST LANGUAGE CHANGES */
  const handleLanguageChange = (e) => {
    onLanguageChange(e);

    if (!call) return;

    call.sendCustomEvent({
      type: "language-update",
      language: e.target.value,
    });
  };

  return (
    <div className="h-full min-h-0 bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />

          <select
            className="select select-sm"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary btn-sm gap-2"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 16,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
