import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Column } from "@/layouts/column";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCsrfCode } from "../../lib/auth";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  useEffect(() => {
    setFormData({ ...formData, csrf: getCsrfCode() });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const email = formData.email;
    const parts = email.split("@");
    let user = parts[0].split("");
    const domain = parts[1];
    setEmailEncrypted(
      user.map((c, i) => (i == 0 ? c : "*")).join("") + "@" + domain
    );
    goNext();
  };
  const [formData, setFormData] = useState({});
  const [emailEncrypted, setEmailEncrypted] = useState("");

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [selectedPhase, setPhase] = useState(0);
  const goNext = () => {
    setPhase(selectedPhase + 1);
  };
  const goPrevious = () => {
    setPhase(selectedPhase - 1);
  };
  const phases = [
    <FirstPhase
      formData={formData}
      handleData={handleData}
      handleNext={goNext}
    />,
    <SecondPhase
      formData={formData}
      handleData={handleData}
      handleNext={goNext}
      handlePrevious={goPrevious}
    />,
    <ThirdPhase
      formData={formData}
      handleData={handleData}
      handlePrevious={goPrevious}
    />,
    <FourthPhase email={emailEncrypted} />,
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-screen h-screen justify-center items-center"
      action="#"
      method="post"
    >
      {phases[selectedPhase]}
    </form>
  );
}

function FirstPhase({ formData, handleData, handleNext }) {
  return (
    <Card className="min-w-[300px] w-full max-w-sm p-6 flex flex-col gap-6 animate-card-show-up">
      <Column className="space-y-1">
        <Link to={"/"} className="flex space-x-2">
          <img src={logoImg} alt="logo" />
        </Link>
        <h1 className="font-semibold tracking-tight text-2xl leading-tight">
          Crear cuenta
        </h1>
        <p className="text-sm text-muted-foreground">
          Introduce tus datos para crear una cuenta
        </p>
      </Column>
      <div className="grid gap-8">
        <Column className="grip gap-4">
          <Column className="gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleData}
              name="name"
            />
          </Column>
          <Column className="gap-2">
            <Label htmlFor="firstSurname">Primer apellido</Label>
            <Input
              type="text"
              id="firstSurname"
              placeholder="Primer apellido"
              value={formData.firstSurname}
              onChange={handleData}
              name="firstSurname"
            />
          </Column>
          <Column className="gap-2">
            <Label htmlFor="secondSurname">Segundo apellido</Label>
            <Input
              type="text"
              id="secondSurname"
              placeholder="Segundo apellido"
              value={formData.secondSurname}
              onChange={handleData}
              name="secondSurname"
            />
          </Column>
          <Column className="gap-2">
            <Column className="items-center w-full">
              <Button
                type="button"
                className="w-full"
                onClick={() => handleNext(0)}
              >
                Siguiente
              </Button>
            </Column>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  o si tienes cuenta
                </span>
              </div>
            </div>
            <Column className="items-center w-full">
              <Link to="/access/login" className="w-full">
                <Button variant="secondary" type="button" className="w-full">
                  Iniciar sesión
                </Button>
              </Link>
            </Column>
          </Column>
        </Column>
      </div>
    </Card>
  );
}

function SecondPhase({ formData, handleData, handleNext, handlePrevious }) {
  return (
    <Card className="min-w-[300px] w-full max-w-sm p-6 flex flex-col gap-6 animate-card-show-up">
      <Column className="space-y-1">
        <Link to={"/"} className="flex space-x-2">
          <img src={logoImg} alt="logo" />
        </Link>
        <h1 className="font-semibold tracking-tight text-2xl leading-tight">
          Crear cuenta
        </h1>
        <p className="text-sm text-muted-foreground">
          Introduce tus datos para crear una cuenta
        </p>
      </Column>
      <div className="grid gap-8">
        <Column className="grip gap-4">
          <Column className="gap-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              type="text"
              id="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleData}
              name="username"
            />
          </Column>
          <Column className="gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleData}
              name="email"
            />
          </Column>
          <Column className="gap-2">
            <Column className="items-center w-full">
              <Button type="button" className="w-full" onClick={handleNext}>
                Siguiente
              </Button>
            </Column>
            <Column className="items-center w-full">
              <Button
                variant="secondary"
                type="button"
                className="w-full"
                onClick={handlePrevious}
              >
                Volver
              </Button>
            </Column>
          </Column>
        </Column>
      </div>
    </Card>
  );
}

function ThirdPhase({ formData, handleData, handlePrevious }) {
  const [seePass, setSeePass] = useState(false);
  const [toTextPass, setToTextPass] = useState(false);

  return (
    <Card className="min-w-[300px] w-full max-w-sm p-6 flex flex-col gap-6 animate-card-show-up">
      <Column className="space-y-1">
        <Link to={"/"} className="flex space-x-2">
          <img src={logoImg} alt="logo" />
        </Link>
        <h1 className="font-semibold tracking-tight text-2xl leading-tight">
          Crear cuenta
        </h1>
        <p className="text-sm text-muted-foreground">
          Introduce tus datos para crear una cuenta
        </p>
      </Column>
      <div className="grid gap-8">
        <Column className="grip gap-4">
          <Column className="gap-2 relative">
            <Label htmlFor="pass">Contraseña</Label>
            <button
              type="button"
              className={`absolute right-2 top-7 ${
                seePass ? "visible" : "hidden"
              }`}
              onClick={() => setToTextPass(!toTextPass)}
              onMouseOver={() => setSeePass(true)}
              onMouseOut={() => setSeePass(false)}
            >
              {seePass ? <IconEye /> : <IconEyeClosed />}
            </button>
            <Input
              type={toTextPass ? "text" : "password"}
              id="pass"
              placeholder="Contraseña"
              onMouseOver={() => setSeePass(true)}
              onMouseOut={() => setSeePass(false)}
              value={formData.pass}
              onChange={handleData}
              name="pass"
            />
          </Column>
          <Column className="gap-2 relative">
            <Label htmlFor="rpass">Repita la contraseña</Label>
            <button
              type="button"
              className={`absolute right-2 top-7 ${
                seePass ? "visible" : "hidden"
              }`}
              onClick={() => setToTextPass(!toTextPass)}
              onMouseOver={() => setSeePass(true)}
              onMouseOut={() => setSeePass(false)}
            >
              {seePass ? <IconEye /> : <IconEyeClosed />}
            </button>
            <Input
              type={toTextPass ? "text" : "password"}
              id="rpass"
              placeholder="Repita la contraseña"
              onMouseOver={() => setSeePass(true)}
              onMouseOut={() => setSeePass(false)}
              value={formData.rpass}
              onChange={handleData}
              name="rpass"
            />
          </Column>
          <Column className="gap-2">
            <Column className="items-center w-full">
              <Button type="submit" className="w-full">
                Hecho
              </Button>
            </Column>
            <Column className="items-center w-full">
              <Button
                variant="secondary"
                type="button"
                className="w-full"
                onClick={handlePrevious}
              >
                Volver
              </Button>
            </Column>
          </Column>
        </Column>
      </div>
    </Card>
  );
}

function FourthPhase({ email }) {
  return (
    <Card className="min-w-[300px] w-full max-w-sm p-6 flex flex-col gap-6 animate-card-show-up">
      <Column className="space-y-1">
        <Link to={"/"} className="flex space-x-2">
          <img src={logoImg} alt="logo" />
        </Link>
        <h1 className="font-semibold tracking-tight text-2xl leading-tight">
          ¡Muchas Gracias!
        </h1>
        <p className="text-sm text-muted-foreground">Confirmación de cuenta</p>
      </Column>
      <Column>
        <p className="text-sm">
          Hemos enviado un correo de confirmación a tu dirección de correo
          electrónico <span className="font-semibold">{email}</span>. Por favor,
          sigue las instrucciones para completar el proceso de registro.
        </p>
      </Column>
    </Card>
  );
}
