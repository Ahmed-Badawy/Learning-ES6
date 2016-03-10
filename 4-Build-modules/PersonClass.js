export Class PersonClass{

	constructor(name){
		this._name = name;
	}
	get name(){
		return this._name;
	}

	method1(){
		return `${this.name} is working here !`
	}
}