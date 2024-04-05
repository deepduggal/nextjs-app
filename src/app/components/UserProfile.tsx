'use client';
import React from 'react'

type UserProfileProps = {name: string, biography: string, hobbies: string[]};

export default function UserProfile({name, biography, hobbies}: UserProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      {biography && <p>{biography}</p>}
      {!biography && <p>No biography available.</p>}
      <ul>
        {!hobbies && <li>No hobbies listed.</li>}
        {hobbies && hobbies.map((hobby, index) => (
          <li key={crypto.randomUUID()}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}
