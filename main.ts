bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    配列.shift()
    配列.push(parseFloat(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))))
    scrollbit.clear()
    for (let カウンター = 0; カウンター <= 16; カウンター++) {
        if (配列[カウンター] % 2 != 0) {
            scrollbit.setPixel(カウンター, 6, 128)
        }
        if (配列[カウンター] / 4 % 2 != 0) {
            scrollbit.setPixel(カウンター, 5, 128)
        }
        if (配列[カウンター] / 8 % 2 != 0) {
            scrollbit.setPixel(カウンター, 4, 128)
        }
        if (配列[カウンター] / 16 % 2 != 0) {
            scrollbit.setPixel(カウンター, 3, 128)
        }
        if (配列[カウンター] / 32 % 2 != 0) {
            scrollbit.setPixel(カウンター, 2, 128)
        }
        if (配列[カウンター] / 64 % 2 != 0) {
            scrollbit.setPixel(カウンター, 1, 128)
        }
        if (配列[カウンター] / 128 % 2 != 0) {
            scrollbit.setPixel(カウンター, 0, 128)
        }
    }
    scrollbit.show()
})
let 配列: number[] = []
bluetooth.startUartService()
scrollbit.clear()
scrollbit.show()
scrollbit.setAll(128)
配列 = []
for (let index = 0; index < 17; index++) {
    配列.push(0)
}
