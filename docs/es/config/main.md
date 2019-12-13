# Configuración
nsyslog se configura a través de un fichero en formato JSON. Por convención, solemos denominar a este fichero como **logagent.json**. La estructura básica de dicho fichero es:

```javascript
{
	// Optional. You can include whatever JSON file that will be merged
	// with the main file
	"include" : [
		// List of JSON files
	],

	// Optional. Global values to use in config expressions
	"properties" : {},

	// Optional. Overrides global configurations
	"config" : {},

	// Filter definitions. (optional)
	"filters" : {},

	// Filter groups (optional)
	"filterGroups" : {},

	// Input declarations
	"inputs" : {},

	// Processor declarations
	"processors" : {},

	// Processor groups (Optional)
	"processorGroups" : {},

	// Transporter declarations
	"transporters" : {},

	// Transporter groups (optional)
	"transporterGroups" : {}

	// Flows
	"flows" : [
		// List of flow objects
	]
}
```
