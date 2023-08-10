describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", { name: /Home page | Show Films/i }).should("exist");
	});
});
