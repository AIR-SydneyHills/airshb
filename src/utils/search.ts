/**
 * Utility to clean markdown and HTML from text to reduce payload size
 * and improve FlexSearch tokenization accuracy.
 * @param text The markdown or HTML string to clean.
 * @returns A cleaned, plain-text string.
 */
export function cleanContent(text: string | undefined): string {
  if (!text) return ''
  return text
    .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace markdown links with just the link text
    .replace(/[#*`_~>\[\]]/g, '') // Remove markdown formatting characters
    .replace(/\s+/g, ' ') // Squash multiple spaces/newlines into a single space
    .trim()
}
