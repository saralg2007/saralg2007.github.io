import java.util.Scanner;

public class CalculadoraBasica {

    // Métodos para las operaciones básicas
    public double sumar(double a, double b) {
        return a + b;
    }

    public double restar(double a, double b) {
        return a - b;
    }

    public double multiplicar(double a, double b) {
        return a * b;
    }

    public double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: No se puede dividir por cero.");
            return Double.NaN; // Not a Number
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CalculadoraBasica calc = new CalculadoraBasica();
        boolean continuar = true;

        System.out.println("=== Calculadora Básica en Java ===");

        while (continuar) {
            System.out.println("\nSelecciona una operación:");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Salir");
            System.out.print("Opción: ");

            int opcion = scanner.nextInt();

            if (opcion == 5) {
                continuar = false;
                System.out.println("Saliendo de la calculadora... ¡Adiós!");
                break;
            }

            if (opcion < 1 || opcion > 5) {
                System.out.println("Opción no válida. Intenta de nuevo.");
                continue;
            }

            System.out.print("Introduce el primer número: ");
            double num1 = scanner.nextDouble();
            System.out.print("Introduce el segundo número: ");
            double num2 = scanner.nextDouble();

            double resultado = 0;

            switch (opcion) {
                case 1:
                    resultado = calc.sumar(num1, num2);
                    System.out.println("Resultado: " + num1 + " + " + num2 + " = " + resultado);
                    break;
                case 2:
                    resultado = calc.restar(num1, num2);
                    System.out.println("Resultado: " + num1 + " - " + num2 + " = " + resultado);
                    break;
                case 3:
                    resultado = calc.multiplicar(num1, num2);
                    System.out.println("Resultado: " + num1 + " * " + num2 + " = " + resultado);
                    break;
                case 4:
                    resultado = calc.dividir(num1, num2);
                    if (!Double.isNaN(resultado)) {
                        System.out.println("Resultado: " + num1 + " / " + num2 + " = " + resultado);
                    }
                    break;
            }
        }
        scanner.close();
    }
}
