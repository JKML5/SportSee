import React from 'react'
import '../css/Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="activities">
        <button
          type="button"
          className="activity activity-01"
          aria-label="Activity 01"
        />
        <button
          type="button"
          className="activity activity-02"
          aria-label="Activity 02"
        />
        <button
          type="button"
          className="activity activity-03"
          aria-label="Activity 03"
        />
        <button
          type="button"
          className="activity activity-04"
          aria-label="Activity 04"
        />
      </div>
      <div className="copyright">Copyright,&nbsp;SportSee&nbsp;2020</div>
    </div>
  )
}

export default Sidebar
