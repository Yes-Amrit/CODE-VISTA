import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";

import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";

import ProblemDescription from "../components/ProblemDescription";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";

import { executeCode } from "../lib/piston";

function ProblemStatement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const DEFAULT_LANGUAGE = "javascript";

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);
  const [code, setCode] = useState(
    PROBLEMS["two-sum"].starterCode[DEFAULT_LANGUAGE]
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // Update problem when URL changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setSelectedLanguage(DEFAULT_LANGUAGE);
      setCode(PROBLEMS[id].starterCode[DEFAULT_LANGUAGE]);
      setOutput(null);
    }
  }, [id]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => {
    navigate(`/problem/${newProblemId}`);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 200,
      origin: { y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);
    return normalizedActual === normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const result = await executeCode(selectedLanguage, code);

      setIsRunning(false);
      setOutput(result);

      if (!result.success) {
        toast.error(result.error || "Code execution failed!");
        return;
      }

      const expectedOutput =
        currentProblem.expectedOutput[selectedLanguage];

      if (!expectedOutput) {
        toast("No expected output defined for this language.");
        return;
      }

      const testsPassed = checkIfTestsPassed(
        result.output,
        expectedOutput
      );

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } catch (error) {
      setIsRunning(false);
      toast.error("Unexpected execution error.");
    }
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <PanelGroup direction="horizontal">

          {/* Left Panel - Problem Description */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="w-1.5 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* Right Panel - Code + Output */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical">

              {/* Code Editor */}
              <Panel defaultSize={70} minSize={30}>
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <PanelResizeHandle className="h-1.5 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              {/* Output */}
              <Panel defaultSize={30} minSize={30}>
                <OutputPanel output={output} />
              </Panel>

            </PanelGroup>
          </Panel>

        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemStatement;
