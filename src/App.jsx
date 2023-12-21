import React from "react";

import "@mdxeditor/editor/style.css";

// importing the editor and the plugin from their full paths
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";

function App() {
  return (
    <div className="App">
      <div style={{ height: "1000px", backgroundColor: "#f78b1b33" }}>
        <MDXEditor
          markdown="Hello world"
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                </>
              ),
            }),
          ]}
        />
      </div>
    </div>
  );
}

export default App;
