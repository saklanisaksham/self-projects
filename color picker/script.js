
        document.addEventListener("DOMContentLoaded", function () {
            const canvas = document.getElementById("signatureCanvas");
            const context = canvas.getContext("2d");
            const colorPicker = document.getElementById("colorPicker");

            let isDrawing = false;

            function startDrawing(e) {
                isDrawing = true;
                draw(e);
            }

            function stopDrawing() {
                isDrawing = false;
                context.beginPath();
            }

            function draw(e) {
                if (!isDrawing) return;

                context.lineWidth = 2;
                context.lineCap = "round";
                context.strokeStyle = colorPicker.value;

                context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
                context.stroke();
                context.beginPath();
                context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            }

            function clearCanvas() {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }

            canvas.addEventListener("mousedown", startDrawing);
            canvas.addEventListener("mousemove", draw);
            canvas.addEventListener("mouseup", stopDrawing);
            canvas.addEventListener("mouseout", stopDrawing);
        });
