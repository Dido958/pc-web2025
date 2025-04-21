function classifyPassword() {
    const password = document.getElementById('password').value;
    const strengthDiv = document.getElementById('strength');
    
    if (password.length === 0) {
        strengthDiv.textContent = '';
        return;
    }
    
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[@#!$%&*()\-+=.,]/.test(password);
    
    let strength = '';
    let className = '';
    
    if (hasLower && hasUpper && hasNumber && hasSpecial) {
        strength = 'Forte';
        className = 'strong';
    } else if (hasLower && hasUpper && hasNumber) {
        strength = 'Moderada';
        className = 'medium';
    } else {
        strength = 'Fraca';
        className = 'weak';
    }
    
    strengthDiv.textContent = `Força da senha: ${strength}`;
    strengthDiv.className = className;
}