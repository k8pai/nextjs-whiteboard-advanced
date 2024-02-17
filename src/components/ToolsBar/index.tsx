import React from "react";
import PencilButton from "./PencilButton";
import RectangleButton from "./RectangleButton";
import EllipseButton from "./EllipseButton";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
import SelectionButton from "./SelectionButton";
import { CanvasMode, LayerType, CanvasState } from "../../types";
import styles from "./index.module.css";
import ClearButton from "./ClearButton";
import ColorButton from "./ColorButton";

type Props = {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
  canClear: boolean;
};

export default function ToolsBar({
  canvasState,
  setCanvasState,
  undo,
  redo,
  clear,
  canUndo,
  canRedo,
  canClear,
}: Props) {
  return (
    <div className={styles.tools_panel_container}>
      <div className={styles.tools_panel}>
        <div className={styles.tools_panel_section}>
          <SelectionButton
            isActive={
              canvasState.mode === CanvasMode.None ||
              canvasState.mode === CanvasMode.Translating ||
              canvasState.mode === CanvasMode.SelectionNet ||
              canvasState.mode === CanvasMode.Pressing ||
              canvasState.mode === CanvasMode.Resizing
            }
            onClick={() => setCanvasState({ mode: CanvasMode.None })}
          />
          <PencilButton
            isActive={canvasState.mode === CanvasMode.Pencil}
            onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
          />
          <RectangleButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Rectangle
            }
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Rectangle,
              })
            }
          />
          <EllipseButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Ellipse
            }
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Ellipse,
              })
            }
          />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.tools_panel_section}>
          <ColorButton
            isActive={
              canvasState.mode === CanvasMode.None ||
              canvasState.mode === CanvasMode.SelectionNet
            }
            onClick={() => setCanvasState({ mode: CanvasMode.None })}
            fill={"#121212"}
          />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.tools_panel_section}>
          <UndoButton onClick={undo} disabled={!canUndo} />
          <RedoButton onClick={redo} disabled={!canRedo} />
          <ClearButton onClick={clear} disabled={!canClear} />
        </div>
      </div>
    </div>
  );
}
