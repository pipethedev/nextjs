package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"message": "Landed successfully on klef.dev api 🚀"})
	})

	log.Fatal(app.Listen(":3333"))
}