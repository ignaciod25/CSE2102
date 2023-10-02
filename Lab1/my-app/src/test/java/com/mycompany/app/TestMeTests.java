package com.mycompany.app;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TestMeTest {

    private TestMe testMe;

    @BeforeEach
    public void setUp() {
        testMe = new TestMe();
    }

    @Test
    public void testSquare() {
        testMe.setValue(4.0);
        assertEquals(16.0, testMe.square(), "4.0 squared should be 16.0");

        testMe.setValue(-4.0);
        assertEquals(16.0, testMe.square(), "-4.0 squared should be 16.0");
    }

    @Test
    public void testSqrt() {
        testMe.setValue(16.0);
        assertEquals(4.0, testMe.sqrt(), "Square root of 16.0 should be 4.0");

        testMe.setValue(-16.0);
        assertTrue(Double.isNaN(testMe.sqrt()), "Square root of -16.0 should be NaN");
    }

    @Test
    public void testReset() {
        testMe.setValue(10.0);
        testMe.reset();
        assertTrue(Double.isNaN(testMe.getValue()), "Value should be NaN after reset");
    }
}
