function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiple(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (err) {
        if (err instanceof NotificationException) {
            return primitiveMultiply(a, b);
        }
    }
}

reliableMultiple(8, 7);