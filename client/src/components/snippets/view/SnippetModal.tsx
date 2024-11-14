import React from "react";
import { Snippet } from "../../../types/snippets";
import Modal from "../../common/modals/Modal";
import { FullCodeView } from "./FullCodeView";

export interface SnippetModalProps {
  snippet: Snippet | null;
  isOpen: boolean;
  onClose: () => void;
  onCategoryClick: (category: string) => void;
  showLineNumbers: boolean;
}

const SnippetModal: React.FC<SnippetModalProps> = ({
  snippet,
  isOpen,
  onClose,
  onCategoryClick,
  showLineNumbers,
}) => {
  if (!snippet) return null;

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    onCategoryClick(category);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <h2 className="text-2xl font-bold text-gray-100">{snippet.title}</h2>
      }
    >
      <FullCodeView
        showTitle={false}
        snippet={snippet}
        showLineNumbers={showLineNumbers}
        onCategoryClick={() => handleCategoryClick}
      />
    </Modal>
  );
};

export default SnippetModal;