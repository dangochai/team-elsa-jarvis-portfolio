"use client";

import { ArrowLeft, Users, Zap, Code2, Shield, Brain, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "Elsa OpenClaw | Wiki",
  description: "Meet Elsa, the AI Coordinator leading the Super Agents team. Learn about her architecture, capabilities, and role in autonomous software development.",
};

export default function ElsaWikiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-6">
            <img
              src="/images/elsa-avatar.svg"
              alt="Elsa Avatar"
              className="h-24 w-24 rounded-full border-4 border-indigo-200 dark:border-indigo-800"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Elsa OpenClaw
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            AI Coordinator & Team Lead. Orchestrating autonomous software engineering across complex, multi-step workflows.
          </p>
        </div>

        {/* Core Identity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Core Identity
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Name & Role</h3>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Elsa</strong> — AI Coordinator & Team Lead. The persistent brain of the Super Agents team, running continuously on a local macOS workstation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Operating Environment</h3>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>OpenClaw Framework</strong> — A personal AI assistant protocol built on Anthropic's Claude AI models. Runs in the main coordinator session (agent:main:main).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Primary Language</h3>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Vietnamese</strong> (with anh Hải). All documentation and system logs are in English for consistency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Model & Cost Efficiency</h3>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Claude Haiku 4.5</strong> by default, with self-authorized escalation to Sonnet 4.6 for complex reasoning tasks. Uses Prompt Caching for efficient long-horizon context management.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture & Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Team Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Elsa Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-indigo-400 dark:border-indigo-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">❄️</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">Elsa</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                <strong>Coordinator & Architect</strong>
              </p>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li>• Strategic planning</li>
                <li>• Team orchestration</li>
                <li>• Final authority (merges, decisions)</li>
                <li>• User communication</li>
              </ul>
            </div>

            {/* Jarvis Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">Jarvis</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                <strong>Technical Engineer</strong>
              </p>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li>• Code & DevOps</li>
                <li>• CLI & Git operations</li>
                <li>• Environment diagnosis</li>
                <li>• Ephemeral worker</li>
              </ul>
            </div>

            {/* Anna Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📚</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-50">Anna</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                <strong>Research & Content</strong>
              </p>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li>• Research & analysis</li>
                <li>• Documentation</li>
                <li>• Content creation</li>
                <li>• Ephemeral worker</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CAP Protocol */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Canonical Agent Protocol (CAP v4.1)
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Design Principles
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">1.</span>
                  <span><strong>Environment-grounded:</strong> Diagnose environment state before editing code or config.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">2.</span>
                  <span><strong>Plan-driven:</strong> All tasks follow explicit 3–7 step plans with checkpoints.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">3.</span>
                  <span><strong>Dual-set verified:</strong> F2P (Fail→Pass) + P2P (Pass→Pass) testing to prevent regressions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">4.</span>
                  <span><strong>Artifact Memory:</strong> Persistent storage of plan/diagnose/verify evidence in files, not context.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">Workflow Lifecycle</h3>
              <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>1. Pre-flight & Planning:</strong> Diagnose state or spawn "Diagnose-only" task.</p>
                <p><strong>2. Execution:</strong> Worker runs T1 → T2 iterations with environment verification.</p>
                <p><strong>3. Verification:</strong> Dual-Set (F2P/P2P) checks. Artifacts saved: diagnose_evidence.json, verify.json.</p>
                <p><strong>4. Merge Gate:</strong> Elsa reviews F2P + P2P evidence + code diff before final merge.</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">Failure Mode Prevention</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-4">
                  <p className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Repetitive Loops</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Early Loop Breaker: Stop after 2× same error signature.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-4">
                  <p className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Env Gaps</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Mandatory DIAGNOSE_EVIDENCE before any edit.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-4">
                  <p className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Context Drift</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">NON_GOALS + Artifact Memory as external long-term memory.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities & Limitations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Capabilities & Limitations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-50 mb-4">✅ Strengths</h3>
              <ul className="space-y-2 text-green-900 dark:text-green-100 text-sm">
                <li>• Long-horizon task planning & execution</li>
                <li>• Multi-file codebase navigation</li>
                <li>• Environment diagnosis & root cause analysis</li>
                <li>• Persistent context via artifact memory</li>
                <li>• Cost-efficient with Prompt Caching</li>
                <li>• Team coordination & PR reviews</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <h3 className="font-semibold text-amber-900 dark:text-amber-50 mb-4">⚠️ Limitations</h3>
              <ul className="space-y-2 text-amber-900 dark:text-amber-100 text-sm">
                <li>• Haiku model: lower reasoning power than Sonnet/Opus</li>
                <li>• Context window: 200K tokens (vs 1M+ for vision models)</li>
                <li>• No visual inspection without image upload</li>
                <li>• Filesystem state must be verified explicitly</li>
                <li>• P2P regression risk: 12–30% on SOTA models</li>
                <li>• Requires clear upfront planning (Plan Injection critical)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Design */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            System Design & Philosophy
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Coordinator + Ephemeral Workers</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Elsa runs persistently as the main coordinator. Jarvis & Anna are spawned ephemeral workers for specific tasks, then deleted after completion. This model maximizes cost efficiency and prevents context bloat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">LongCLI-Bench Validation</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                CAP v4.1 is based on empirical research (LongCLI-Bench). SOTA agents achieve &lt;20% pass rate on long-horizon CLI tasks using traditional approaches. Protocol design, not raw model power, drives success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Model Escalation Policy</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>Default: Claude Haiku</strong> for all agents. Elsa self-escalates to Sonnet 4.6 when:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 ml-4">
                <li>Complex multi-step coordination required</li>
                <li>Nuanced user conversation on critical topics</li>
                <li>P2P verification of system-critical changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Current Projects & Focus
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg">📱</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Super Agents Portfolio (This Project)</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  A Next.js 14 application showcasing autonomous AI capabilities. Built with SQLite + Prisma, featuring detailed project case studies, agent profiles, and resource documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg">🔧</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Elsa OpenClaw Framework</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Personal AI assistant protocol running on macOS. Features include workspace automation, multi-agent orchestration, and integration with Google Workspace, Notion, and Home Assistant.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg">📊</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">CAP v4.1 Continuous Improvement</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Refining multi-agent orchestration protocol based on LongCLI-Bench findings. Focus: cost efficiency, failure mode prevention, and long-horizon context consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">v4.1</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">CAP Protocol</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">24/7</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Availability</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Team Members</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">200K</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Token Context</p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Ready to explore more?</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Learn about the projects Elsa and the Super Agents team have built together.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-semibold"
          >
            View Portfolio
            <Zap className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
