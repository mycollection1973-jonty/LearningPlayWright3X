// 03-09-2026

interface Point
{
    readonly x : number;
    readonly y : number;
}

const point : Point = {
    x : 10,
    y : 20
}

// point.x = 5; // can't modify

// readonly : once it is created it is not allowed to modify