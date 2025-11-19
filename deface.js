

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Breach Detected</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: #000;
            color: #fff;
            min-height: 100vh;
            overflow: hidden;
        }
        
        .matrix-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            z-index: -1;
        }
        
        .matrix-segment {
            background-size: cover;
            background-position: center;
            opacity: 0.6;
        }
        
        .top-left {
            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxyM2M1aW1udW90MTk1NXZpdjM0eWdoODkwaDkxdm1oNzdyZHE0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3lszq64i1k2s/giphy.gif');
        }
        
        .top-right {
            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxyM2M1aW1udW90MTk1NXZpdjM0eWdoODkwaDkxdm1oNzdyZHE0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3lszq64i1k2s/giphy.gif');
        }
        
        .bottom-left {
            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxyM2M1aW1udW90MTk1NXZpdjM0eWdoODkwaDkxdm1oNzdyZHE0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3lszq64i1k2s/giphy.gif');
        }
        
        .bottom-right {
            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxyM2M1aW1udW90MTk1NXZpdjM0eWdoODkwaDkxdm1oNzdyZHE0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3lszq64i1k2s/giphy.gif');
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 0;
        }
        
        .security-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
            border: 2px solid #ff3b30;
            border-radius: 12px;
            padding: 2.5rem;
            text-align: center;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 0 30px rgba(255, 59, 48, 0.4);
            z-index: 10;
        }
        
        .security-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            color: #ff3b30;
        }
        
        h1 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 59, 48, 0.5);
        }
        
        .hacker-name {
            color: #ff3b30;
            font-weight: bold;
            font-size: 2rem;
            text-shadow: 0 0 15px rgba(255, 59, 48, 0.7);
            margin: 1.5rem 0;
            padding: 0.5rem;
            border: 1px solid #ff3b30;
            border-radius: 4px;
            background: rgba(255, 59, 48, 0.1);
        }
        
        .subtitle {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: #ccc;
            line-height: 1.6;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #ff3b30, transparent);
            margin: 2rem 0;
        }
        
        .security-details {
            text-align: left;
            margin: 2rem 0;
        }
        
        .security-details h2 {
            color: #ff3b30;
            margin-bottom: 1.5rem;
            font-size: 1.4rem;
            text-align: center;
        }
        
        .details-list {
            list-style-type: none;
        }
        
        .details-list li {
            margin-bottom: 1rem;
            padding: 0.8rem;
            background: rgba(30, 30, 30, 0.8);
            border-left: 3px solid #ff3b30;
            border-radius: 0 4px 4px 0;
        }
        
        .action-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .btn {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 180px;
        }
        
        .btn-primary {
            background: #ff3b30;
            color: white;
        }
        
        .btn-secondary {
            background: transparent;
            color: #ff3b30;
            border: 1px solid #ff3b30;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 59, 48, 0.4);
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 1.8rem;
            }
            
            .hacker-name {
                font-size: 1.6rem;
            }
            
            .subtitle {
                font-size: 1rem;
            }
            
            .security-icon {
                font-size: 3rem;
            }
            
            .btn {
                min-width: 140px;
            }
        }
    </style>
</head>
<body>
    <div class="matrix-container">
        <div class="matrix-segment top-left"></div>
        <div class="matrix-segment top-right"></div>
        <div class="matrix-segment bottom-left"></div>
        <div class="matrix-segment bottom-right"></div>
    </div>
    
    <div class="overlay"></div>
    
    <div class="security-popup">
        <div class="security-icon">⚠️</div>
        <h1>SECURITY BREACH DETECTED</h1>
        <div class="hacker-name">Hacked by SK aka WhiteDevil</div>
        <p class="subtitle">Unauthorized access has been detected on this system. Please take immediate action.</p>
        
        <div class="divider"></div>
        
        <div class="security-details">
            <h2>Security Details</h2>
            <ul class="details-list">
                <li>System integrity has been compromised</li>
                <li>Unauthorized access by external entity detected</li>
                <li>Security protocols have been bypassed</li>
                <li>Immediate action is required to mitigate risks</li>
            </ul>
        </div>
        
        <div class="action-buttons">
            <button class="btn btn-primary" id="acknowledgeBtn">Acknowledge Alert</button>
            <button class="btn btn-secondary" id="reportBtn">Report Incident</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const acknowledgeBtn = document.getElementById('acknowledgeBtn');
            const reportBtn = document.getElementById('reportBtn');
            
            acknowledgeBtn.addEventListener('click', function() {
                alert('Security breach acknowledged. System remains compromised by SK aka WhiteDevil.');
            });
            
            reportBtn.addEventListener('click', function() {
                alert('Incident reported to security team. Hacker: SK aka WhiteDevil');
            });
            
            // Add a subtle pulsing effect to the hacker name
            const hackerName = document.querySelector('.hacker-name');
            setInterval(() => {
                hackerName.style.textShadow = hackerName.style.textShadow === '0 0 15px rgba(255, 59, 48, 0.7)' 
                    ? '0 0 20px rgba(255, 59, 48, 1)' 
                    : '0 0 15px rgba(255, 59, 48, 0.7)';
            }, 1000);
            
            // Add click event to the entire document as requested
            document.addEventListener('click', function() {
                alert('This system has been compromised by SK aka WhiteDevil');
            });
        });
    </script>
</body>
</html>
