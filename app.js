<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clippy PWA Assistant</title>
    <!-- Link the PWA Manifest -->
    <link rel="manifest" href="manifest.json">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e0f2f1; /* Light teal background */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden; /* Prevent body scroll if clippy is dragged */
        }
        #clippy {
            position: fixed;
            z-index: 10000;
            cursor: grab;
            transition: opacity 0.3s ease;
        }
        #bubble {
            background-color: #ffffff;
            color: #1f2937;
            padding: 12px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            position: absolute;
            bottom: 60px; /* Position above clippy image */
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s ease, transform 0.2s ease;
            pointer-events: none; /* Allows clicks to pass through bubble */
        }
        .show-bubble {
            opacity: 1 !important;
            transform: translateX(-50%) translateY(-10px) !important;
        }
    </style>
</head>
<body>
    <div class="p-6 bg-white rounded-xl shadow-2xl text-center">
        <h1 class="text-3xl font-bold text-gray-800">Clippy PWA</h1>
        <p class="mt-2 text-gray-600">
            Your friendly assistant is active and ready! Drag him around and double-click him to see him chat.
        </p>
    </div>
    
    <!-- The main logic is in app.js -->
    <script src="app.js"></script>
</body>
</html>
