function toFreud(string) {
    if (!string) {
        return ''
    }

    string = string.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = 'sex';
    }
    string = string.join(' ');
    return string
}