const BASE_URL = 'http://localhost:8000';

export async function savePreferences(interests) {
  await fetch(`${BASE_URL}/preferences`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: 'demoUser', interests }),
  });
}

export async function startAutomation() {
  await fetch(`${BASE_URL}/automation/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: 'demoUser' }),
  });
}
