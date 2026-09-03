// 01-09-2026

class A{
    who()
    {
        return "A";
    }
}

class B extends A{
    who()
    {
        return "B> " + super.who();
    }
}

class C extends B{
    who()
    {
        return "C> " + super.who();
    }
}

console.log(new C().who());  // C> B> A
