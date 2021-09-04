function DropdownComponents(text) {
  const dropdownStyle = {
    "display": "flex",
    "justify-content": "space-between",
    "align-items": "center",
    "margin-bottom": "5px",
  };
  return (
    <dropdown className="dropdown" style={dropdownStyle}>
      <div className="text-dropdown">{text}</div>
      <i class="arrow right"></i>
    </dropdown>
  );
}

export default DropdownComponents;
