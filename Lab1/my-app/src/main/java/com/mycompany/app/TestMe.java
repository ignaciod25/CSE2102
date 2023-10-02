package com.mycompany.app;

public class TestMe {
	private double value = Double.NaN;

	public static void main(String[] args) {
		System.out.println("Lab 0: Hello World!");
		
		TestMe test = new TestMe();
		test.setValue(16);
		System.out.println("Set value: " + test.getValue());
		System.out.println("Square: " + test.square());
		System.out.println("Square root: " + test.sqrt());
		
		test.reset();
		System.out.println("After reset: " + test.getValue());
	}

	public TestMe() {}

	public double square() { return value*value; }

	public double sqrt() {
		if (value < 0) {
			System.out.println("Value is negative. Can't compute the square root.");
			return Double.NaN;
		}
		return Math.sqrt(value);
	}

	public void setValue(double v) {
		value = v;
	}
	
	public double getValue() {
		return value;
	}
	
	public void reset() {
		value = Double.NaN;
	}
}
