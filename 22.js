for (let i = 1; i <= 100; i++) {
    // Check if 'i' is a perfect square
    if (Math.sqrt(i) % 1 === 0) {
        console.log(`First square number encountered: ${i}`);
        break; // Stop the loop when a square number is found
    }
}