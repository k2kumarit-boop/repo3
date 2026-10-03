import React, { useState, useEffect } from 'react';
import { AUTOMATION_SCRIPTS, AutomationScript } from '../data/portfolioData';

export const AutomationLab: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState<AutomationScript>(AUTOMATION_SCRIPTS[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Set initial terminal output when switching script
  useEffect(() => {
    setTerminalLogs([
      `# Selected script: ${selectedScript.name} (${selectedScript.language})`,
      `# Category: ${selectedScript.category}`,
      `# Ready to simulate. Click "Execute Script" below to observe output.`
    ]);
    setIsRunning(false);
  }, [selectedScript]);

  const handleRunScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalLogs([
      `$ invoke-runner --runtime=${selectedScript.language.toLowerCase()} --script="${selectedScript.name}"`,
      `[sys] Allocating isolated runner container... OK`,
      `[sys] Injecting environment credentials (AWS/GCP/Endpoint IAM)... OK`,
      `--- EXECUTION START ---`
    ]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < selectedScript.simulatedOutput.length) {
        const nextLine = selectedScript.simulatedOutput[step];
        setTerminalLogs((prev) => [...prev, nextLine]);
        step++;
      } else {
        clearInterval(interval);
        setTerminalLogs((prev) => [
          ...prev,
          `--- EXECUTION COMPLETED (Exit Code 0) ---`,
          `[sys] Operational impact: ${selectedScript.impact}`
        ]);
        setIsRunning(false);
      }
    }, 280);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(selectedScript.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // Fallback
      setCopiedCode(false);
    }
  };

  return (
    <section id="automation-lab" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            04. Interactive Engineering Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            The Automation & Optimization Lab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select and run interactive simulations of production automation scripts engineered by Kumar to solve real endpoint, storage, and multi-cloud operational challenges.
          </p>
        </div>

        {/* Lab Grid: Script Selector + Code & Terminal Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Script Selector Cards */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Available Automation Scenarios
            </div>

            {AUTOMATION_SCRIPTS.map((script) => {
              const isSelected = selectedScript.id === script.id;
              return (
                <button
                  key={script.id}
                  onClick={() => setSelectedScript(script)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/50 shadow-md shadow-cyan-950/20'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">
                      {script.name}
                    </span>
                    <span className="font-mono text-cyan-400 text-[11px]">
                      {script.language}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {script.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">
                      {script.category}
                    </span>
                    <span className="text-emerald-400 font-mono text-[10px]">
                      Verified Code
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Quick Context Card */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-xs text-slate-300 space-y-1.5 mt-4">
              <span className="font-semibold text-white block">Automation Philosophy:</span>
              <p className="text-slate-400 leading-relaxed">
                All scripts adhere to strict idempotency, exception handling with dry-run support, and non-destructive recovery standards.
              </p>
            </div>
          </div>

          {/* Right Column: Code Viewer & Interactive Terminal Console */}
          <div className="lg:col-span-8 space-y-6">
            {/* Terminal Window */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950 overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    terminal · {selectedScript.language.toLowerCase()}-runtime
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRunScript}
                    disabled={isRunning}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isRunning
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-sm'
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Executing...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Execute Simulation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Log Console */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-200 h-64 overflow-y-auto space-y-1.5 bg-slate-950/95">
                {terminalLogs.map((log, idx) => {
                  const isCommand = log.startsWith('$') || log.startsWith('-->');
                  const isSuccess = log.includes('[✓]') || log.includes('OPTIMAL') || log.includes('PASS');
                  const isWarning = log.includes('WARNING') || log.includes('FLAG');

                  return (
                    <div
                      key={idx}
                      className={`${
                        isCommand
                          ? 'text-cyan-300 font-semibold'
                          : isSuccess
                          ? 'text-emerald-400'
                          : isWarning
                          ? 'text-amber-400'
                          : 'text-slate-300'
                      }`}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Status: {isRunning ? 'Running' : 'Idle'}</span>
                <span>Impact: {selectedScript.impact}</span>
              </div>
            </div>

            {/* Code Inspection Block */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-300">
                    Source Code Inspector:
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {selectedScript.name}
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed bg-slate-950/80 max-h-72">
                <code>{selectedScript.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
