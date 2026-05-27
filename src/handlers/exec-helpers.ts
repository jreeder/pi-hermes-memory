/**
 * Helpers for spawning background `pi -p --no-session` processes.
 */

/**
 * Build the argument list for a background `pi -p --no-session` invocation.
 *
 * When `model` is provided it is forwarded as `--model <model>`, letting the
 * caller control which model handles background review / flush / consolidation
 * without touching the interactive session's model selection.
 *
 * @param prompt  The full prompt string to pass to pi.
 * @param model   Optional model identifier (e.g. "claude-haiku-4-5-20251001").
 *                Omit (or pass undefined) to use the pi CLI default.
 */
export function buildBackgroundPiArgs(prompt: string, model?: string): string[] {
  const args: string[] = ["-p", "--no-session"];
  if (model) {
    args.push("--model", model);
  }
  args.push(prompt);
  return args;
}
