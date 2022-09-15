De esta forma surge naturalmente otro subconjunto en R, denotado por R-,
el cual llamamos conjunto de numeros reales negativos

aϵR‾ ⇔ a<0

Es claro que ahora que R‾ corresponde al conjunto de los inversos aditivos
de los elemenetos en R+ y que la union de ambos conjuntos con 0 resulta a ser todo R

aϵR ⇔ (aϵR‾Va=0VaϵR+)

En otras palabras

R=R‾U{0}∩R+∧ø=R‾∩{0}

## 1.2.1 propiedades de los desiguales en R

De acuerdo a los aziomas y definiciones dados,
no es dificil demostrar que que en R la relacion "mayor o igual que"
constituye una relacion de orden

-   propiedad reflexiva | (⩝ʌaϵR)(a>=a) |
-   propiedad asimetrica | (⩝a,bϵR)(a≥b ∧ b≥a ⇒ a=b) |
-   propiedad transitiva | (⩝a,b,cϵR)(a≥b ∧ b≥c ⇒ a≥c) |

## 1.2.2 otras propiedades de las desigualdades en R

1. (⩝a,b,c ϵR)(a>b ⇒ a+c > b+c)
2. (⩝a,b,c ϵR)(a>b∧c>0 ⇒ ac>bc)
3. (⩝a,b,c ϵR)(a>b∧c<0 ⇒ ac<bc)
4. (⩝a ϵR)(a!=0 ⇒ a²+0)
5. (⩝a ϵR)(a>0 ⇒ a^>0)
6. (⩝a,b ϵR)(a>b>0 ⇒ b^-1>a^-1)
7. (⩝a,b ϵR)(a>b≥0⇒ a²>b²)

## 1.2.3 Intervalos

Una forma de escribir y representar ciertos subconjuntos de los numeros reales
que involucran desigualdades en su definicion son los intervalos
Sean a,b dos numeros reales tales que a<b

1. Llamamos intervalo abierto al conjunto

    > ]a,b[:={xϵR:a<x<b}

    ```
     <--⨀▨▨▨▨▨▨⨀-->
        a          b
    ```

2. Llamamos intervalo cerrado al conjunto

    > [a,b]: ={xϵR:a≤x≤b}

    ```
     <--⨂▨▨▨▨▨▨⨂-->
        a          b
    ```

3. LLamamos al intervalo semiabierto por la derecha al conjunto
    > [a,b[:={xϵR:a≤x<b}
    ```
     <--⨀▨▨▨▨▨▨⨂-->
        a          b
    ```
4. LLamamos al intervalo semiabierto por la izquierda al conjunto
    > [a,b[:={xϵR:a<x≤b}
    ```
     <--⨀▨▨▨▨▨▨⨂-->
        a          b
    ```
5. LLamamos al intervalo semiabierto por la izquierda al conjunto

    > [a,b[:={xϵR:a<x≤b}

    ```
     <--⨀▨▨▨▨▨▨⨂-->
        a          b
    ```

6. llamamos intervalo infinito abierto por la izquierda al conjunto

    > ]a,b[:={xϵR:x>a}

    ```
    <--⨀▨▨▨▨▨▨/-->
       a            +∞
    ```

7. llamamos intervalo infinito cerrado por la derecha al conjunto

    > ]-∞,b]:={xϵR:x≤a}

    ```
    <--⨂▨▨▨▨▨▨/-->
       a            +∞
    ```

8. llamamos intervalo infinito cerrado por la izquierda al conjunto
    > [a,+∞[:={xϵR:x≥a}
    ```
     <--⨂▨▨▨▨▨▨/-->
        a            +∞
    ```

## 1.2.4 Distancia entre dos numeros reales

sean a y b dos numeros reales. Definimos la distancia entre a y b,
denotada por dist(a,b) a la diferencia negativa entre a y b
{a-b si a-b≥0
dist(a,b)={b-a si b-a≥0

ejemplos:
calcula la distancia entre los pares de nimeros reales dados a continuacion

a) 3 y -4

b) -7 y -5

c) -3 y 4

d) 5 y 0

propiedades relativas al concepto de distancia entre numeros reales

1. (⩝a,b ϵR) (dist(a,b) = dist(b,a))
2. (⩝a,b ϵR) (dist(a,b) = dist(-a,-b))
3. (⩝a,b)ϵR) (dist(a,c) ≤ dist(a,b) + dist(b,c))

## 1.2.5 Valor absoluto de un numero real

Sea ϵR Llamamos _valor absoluto de a_ a un valor real que se denta por |a| y se define de la siguiente forma

```
     { a si a > 0
|a|:={ 0 si a = 0
     {-a si a < 0
```

### propiedades relativas al concepto de valor absoluto de un numero real

1. `(⩝a,b ϵR) (|a*b| = |a| * |b|)`
1. `(⩝a,b ϵR) (b!=0 => |a/b| = |b/a|)`
1. `(⩝a,b ϵR) (||a|-|b|| <= |a-+b| <= |a|+|b|)`
1. `(⩝a ϵR) (|a| = √a²)`
1. `(⩝a ϵR) (|a| = dist(a,0))`

calcula |3| y |-√2|

temenos:

|3| = 3 pues 3≥0
|-√2| = -(-√2) = √2 pues -√2≤0

Sean a>0 ¿cual es el valor de ||1-a?

-   caso 0<a<1
    notemos que en este caso `1-a>0` entonces |1-a| = 1-a
-   caso a≥1
    notemos que en este csaso `1-a≤0` entonces |1-a| = -(1-a) = -1+a = a-1
