<div className="y-spacing">
  <Icon icon="error" size={64} />

  <ul className="y-spacing">
    {Object.keys(icons).map(i => (
      <li>
        <Icon icon={i} size={24} className="margin-right-half"/>
        {i}
      </li>
    ))}
  </ul>
</div>