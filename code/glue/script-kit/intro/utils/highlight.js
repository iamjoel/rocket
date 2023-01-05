const wrapCode = (html) => `<pre class="px-4">
<style type="text/css">
  code {
    font-size: 0.75rem !important;
    width: 100%;
    white-space: pre-wrap;
  }
  pre {
    display: flex;
  }
  p {
    margin-bottom: 1rem;
  }
</style>
  <code>
${html.trim()}
  </code>
</pre>`;

const highlightCode = async ({ contents, language }) => {
  const { default: highlight } = await npm("highlight.js");
  let highlightedContents = language
    ? highlight.highlight(contents, { language }).value
    : highlight.highlightAuto(contents).value;

  return wrapCode(highlightedContents);
};

export default highlightCode