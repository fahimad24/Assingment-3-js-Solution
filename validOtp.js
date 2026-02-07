function validOtp(otp) {
    if (typeof otp !== 'string') {
        return 'Invalid';
    }

    if (otp.length === 8 && otp.includes('ph-')) {
        return true;
    }else {
        return false;
    }
}    
 // 'Invalid'