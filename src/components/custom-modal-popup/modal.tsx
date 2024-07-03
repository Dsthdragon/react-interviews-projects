import { ReactNode } from "react";
import "./modal.css";

interface Props {
  id?: string;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  onClose: () => void
}
export default function Modal({
  id = "Modal",
  header = "header",
  body = (
    <div>
      <p>This is our Modal Body</p>
    </div>
  ),
  footer = <h2>Footer</h2>,
  onClose
}: Props) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header} </h2>
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
}
