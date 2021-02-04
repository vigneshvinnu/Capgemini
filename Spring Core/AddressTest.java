package com.assignment.valid;
import static org.junit.Assert.*;
import org.junit.Test;
public class AddressTest {
	@Test
	public void gettest() 
	{
	Customer c =new Customer();
	c.setCustomerName("Vinnu");
	c.setCustomerContact(66652);
	c.setCustomerId(669586);
	
	assertEquals("Vinnu", c.getCustomerName());
	assertEquals(66652,c.getCustomerContact());
	assertEquals(669586,c.getCustomerId());
	
	}

}
