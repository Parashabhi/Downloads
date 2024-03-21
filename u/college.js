class college
{
	constructor(name,year,strength)
	{
		this.name=name;
		this.year=year;
		this.strength=strength;
	}
	wishes()
	{
		console.log("Name of the college:",this.name);
		console.log("Establishment of the college is :"+this.year)
		console.log("Strength of the college is :"+this.strength)
		
	}
}
module.exports=college;









