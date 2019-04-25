import fetch from 'node-fetch'

export async function upvote (article) {
  try {
    let request = {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let response = await fetch (`/upvote`, request)
    return response
  }
  catch (error) {
    console.log("[ERROR] increaseScore()")
  }
}

export async function downvote (article) {
  try {
    let request = {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let response = await fetch (`/downvote`, request)
    return response
  }
  catch (error) {
    console.log("[ERROR] decreaseScore()")
  }
}
