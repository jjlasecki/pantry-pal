import "./EmptyState.css";

export default function EmptyState() {
  return (
    <div className="empty-state">
      <h2>No recipes found</h2>
      <p>Try searching for a different ingredient.</p>
    </div>
  );
}
