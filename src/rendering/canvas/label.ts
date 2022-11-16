/**
 * Sigma.js Canvas Renderer Label Component
 * =========================================
 *
 * Function used by the canvas renderer to display a single node's label.
 * @module
 */
import { Settings } from "../../settings";
import { NodeDisplayData, PartialButFor, LabelDisplayData } from "../../types";

export default function drawLabel(
  context: CanvasRenderingContext2D,
  data: PartialButFor<NodeDisplayData, "x" | "y" | "size" | "label" | "color">,
  settings: Settings,
): LabelDisplayData {
  if (!data.label) return { x: 0, y: 0, size: 0 };

  const size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight,
    color = settings.labelColor.attribute
      ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000"
      : settings.labelColor.color;

  context.fillStyle = color;
  context.font = `${weight} ${size}px ${font}`;

  const x = data.x + data.size + 3;
  const y = data.y + data.size / 3;
  const displayData = { x, y, size };
  context.fillText(data.label, x, y);
  return displayData;
}
